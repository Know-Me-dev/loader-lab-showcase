import { supabase } from "../lib/supabaseClient";

interface Favorite {
  id: number;
  user_id: string;
  loader_id: number;
  created_at?: string;
}

export const supabaseFavorites = {
  async getFavorites(userId: string): Promise<number[]> {
    try {
      const { data, error } = await supabase
        .from("favorites")
        .select("loader_id")
        .eq("user_id", userId);

      if (error) throw error;
      return data.map((fav) => fav.loader_id);
    } catch (err) {
      console.error("Error fetching favorites:", err);
      return [];
    }
  },

  async addFavorite(userId: string, loaderId: number): Promise<boolean> {
    try {
      const { error } = await supabase.from("favorites").insert([
        {
          user_id: userId,
          loader_id: loaderId,
        },
      ]);

      if (error) throw error;
      return true;
    } catch (err) {
      console.error("Error adding favorite:", err);
      return false;
    }
  },

  async removeFavorite(userId: string, loaderId: number): Promise<boolean> {
    try {
      const { error } = await supabase
        .from("favorites")
        .delete()
        .eq("user_id", userId)
        .eq("loader_id", loaderId);

      if (error) throw error;
      return true;
    } catch (err) {
      console.error("Error removing favorite:", err);
      return false;
    }
  },

  async syncFavorites(
    userId: string,
    localFavorites: number[]
  ): Promise<number[]> {
    try {
      // First, get all user's favorites from Supabase
      const { data: existingFavorites, error: fetchError } = await supabase
        .from("favorites")
        .select("loader_id")
        .eq("user_id", userId);

      if (fetchError) throw fetchError;

      // Convert to set of IDs for easier comparison
      const existingIds = new Set(
        existingFavorites.map((fav) => fav.loader_id)
      );
      const localIds = new Set(localFavorites);

      // Find favorites to add (in local but not in Supabase)
      const favoritesToAdd = localFavorites.filter((id) => !existingIds.has(id));

      if (favoritesToAdd.length > 0) {
        const { error: insertError } = await supabase.from("favorites").insert(
          favoritesToAdd.map((loaderId) => ({
            user_id: userId,
            loader_id: loaderId,
          }))
        );
        if (insertError) throw insertError;
      }

      // Return combined set of favorites
      return [...new Set([...existingIds, ...localIds])];
    } catch (err) {
      console.error("Error syncing favorites:", err);
      return localFavorites; // Fallback to local favorites
    }
  },
};
