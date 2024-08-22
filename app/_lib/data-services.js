import { eachDayOfInterval } from "date-fns";

import { supabase } from "@/app/_lib/supabase";

// GET
export const getCabin = async id => {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
};

export const getCabinPrice = async id => {
  const { data, error } = await supabase
    .from("cabins")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
};

export const getCabins = async () => {
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  console.log(data);

  return data;
};
