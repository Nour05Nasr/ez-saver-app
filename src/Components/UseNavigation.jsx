import { useState } from 'react';
import { supabase } from '../Supabase'; 

export function useNavigation() { 
  const [targetCoords, setTargetCoords] = useState(null);

  const fetchProductLocation = async (sku) => {
    const { data, error } = await supabase
      .from('products')
      .select('x_pos, z_pos')
      .eq('sku', sku)
      .single();

    if (data) {
      setTargetCoords([data.x_pos, 0, data.z_pos]);
    }
  };

  return { targetCoords, fetchProductLocation };
}