const productOptions = [
    { value: 'Royal Canin Indoor Adult', label: 'Royal Canin Indoor Adult' },
    { value: 'Royal Canin Kitten', label: 'Royal Canin Kitten' },
    { value: 'Royal Canin Hairball Care', label: 'Royal Canin Hairball Care' },
    { value: 'Royal Canin Sterilised', label: 'Royal Canin Sterilised' },
    { value: 'Royal Canin Gastro Intestinal', label: 'Royal Canin Gastro Intestinal' },
    
    { value: 'Hills Science Diet Adult Optimal Care', label: 'Hills Science Diet Adult Optimal Care' },
    { value: 'Hills Science Diet Kitten Healthy Development', label: 'Hills Science Diet Kitten Healthy Development' },
    { value: 'Hills Prescription Diet c/d Multicare', label: 'Hills Prescription Diet c/d Multicare' },
    { value: 'Hills Prescription Diet k/d', label: 'Hills Prescription Diet k/d' },
    { value: 'Hills Science Diet Hairball Control', label: 'Hills Science Diet Hairball Control' },
    
    { value: 'Purina Pro Plan Gato Adulto', label: 'Purina Pro Plan Gato Adulto' },
    { value: 'Purina Pro Plan Delicate', label: 'Purina Pro Plan Delicate' },
    { value: 'Purina Pro Plan Kitten OptiStart', label: 'Purina Pro Plan Kitten OptiStart' },
    { value: 'Purina Pro Plan Sterilised', label: 'Purina Pro Plan Sterilised' },
    { value: 'Purina Pro Plan Urinary Tract Health', label: 'Purina Pro Plan Urinary Tract Health' },
    
    { value: 'Whiskas Adulto Carne', label: 'Whiskas Adulto Carne' },
    { value: 'Whiskas Adulto Pollo', label: 'Whiskas Adulto Pollo' },
    { value: 'Whiskas Junior', label: 'Whiskas Junior' },
    { value: 'Whiskas Pouch Pescado', label: 'Whiskas Pouch Pescado' },
    { value: 'Whiskas Pouch Pollo y Hígado', label: 'Whiskas Pouch Pollo y Hígado' },
    
    { value: 'Felix Sensations Carne en Salsa', label: 'Felix Sensations Carne en Salsa' },
    { value: 'Felix Sensations Pescado en Salsa', label: 'Felix Sensations Pescado en Salsa' },
    { value: 'Felix Sensations Paté', label: 'Felix Sensations Paté' },
    { value: 'Felix Pouch Adulto Mix', label: 'Felix Pouch Adulto Mix' },
    { value: 'Felix Crispies Snacks', label: 'Felix Crispies Snacks' },
    
    { value: 'Cat Chow Defensa Natural Pollo', label: 'Cat Chow Defensa Natural Pollo' },
    { value: 'Cat Chow Gatitos', label: 'Cat Chow Gatitos' },
    { value: 'Cat Chow Adulto Pescado', label: 'Cat Chow Adulto Pescado' },
    { value: 'Cat Chow Esterilizados', label: 'Cat Chow Esterilizados' },
    { value: 'Cat Chow Vida Sana Piel y Pelaje', label: 'Cat Chow Vida Sana Piel y Pelaje' },
    
    { value: 'Taste of the Wild Rocky Mountain Feline', label: 'Taste of the Wild Rocky Mountain Feline' },
    { value: 'Taste of the Wild Canyon River Feline', label: 'Taste of the Wild Canyon River Feline' },
    { value: 'Taste of the Wild Prey Turkey Limited Ingredient', label: 'Taste of the Wild Prey Turkey Limited Ingredient' },
    
    { value: 'Matisse Gato Adulto Pollo y Arroz', label: 'Matisse Gato Adulto Pollo y Arroz' },
    { value: 'Matisse Gato Sterilised', label: 'Matisse Gato Sterilised' },
    { value: 'Matisse Gato Kitten', label: 'Matisse Gato Kitten' },
    { value: 'Matisse Gato Salmon y Atún', label: 'Matisse Gato Salmon y Atún' },
    
    { value: 'Chunky Adultos Pollo y Carne', label: 'Chunky Adultos Pollo y Carne' },
    { value: 'Chunky Adultos Pollo y Pescado', label: 'Chunky Adultos Pollo y Pescado' },
    { value: 'Chunky Gatitos', label: 'Chunky Gatitos' },
    
    { value: 'Equilibrio Gato Adulto Pollo y Arroz', label: 'Equilibrio Gato Adulto Pollo y Arroz' },
    { value: 'Equilibrio Gato Esterilizado', label: 'Equilibrio Gato Esterilizado' },
    { value: 'Equilibrio Gato Gatitos', label: 'Equilibrio Gato Gatitos' },
    { value: 'Royal Canin Medium Adult', label: 'Royal Canin Medium Adult' },
    { value: 'Royal Canin Maxi Adult', label: 'Royal Canin Maxi Adult' },
    { value: 'Royal Canin Mini Puppy', label: 'Royal Canin Mini Puppy' },
    { value: 'Royal Canin Dermacomfort', label: 'Royal Canin Dermacomfort' },
    { value: 'Royal Canin Gastro Intestinal', label: 'Royal Canin Gastro Intestinal' },
    
    { value: 'Hills Science Diet Adult Large Breed', label: 'Hills Science Diet Adult Large Breed' },
    { value: 'Hills Science Diet Puppy Small Bites', label: 'Hills Science Diet Puppy Small Bites' },
    { value: 'Hills Prescription Diet j/d', label: 'Hills Prescription Diet j/d (Joint Care)' },
    { value: 'Hills Prescription Diet i/d', label: 'Hills Prescription Diet i/d (Digestive Care)' },
    { value: 'Hills Science Diet Light Adult', label: 'Hills Science Diet Light Adult' },

    { value: 'Purina Pro Plan Adulto Razas Medianas', label: 'Purina Pro Plan Adulto Razas Medianas' },
    { value: 'Purina Pro Plan Cachorros Razas Grandes', label: 'Purina Pro Plan Cachorros Razas Grandes' },
    { value: 'Purina Pro Plan Reduced Calorie', label: 'Purina Pro Plan Reduced Calorie' },
    { value: 'Purina Pro Plan Sensitive Skin & Stomach', label: 'Purina Pro Plan Sensitive Skin & Stomach' },
    { value: 'Purina Pro Plan Performance', label: 'Purina Pro Plan Performance' },

    { value: 'Dog Chow Adulto Razas Medianas', label: 'Dog Chow Adulto Razas Medianas' },
    { value: 'Dog Chow Adulto Razas Pequeñas', label: 'Dog Chow Adulto Razas Pequeñas' },
    { value: 'Dog Chow Cachorros Razas Medianas', label: 'Dog Chow Cachorros Razas Medianas' },
    { value: 'Dog Chow Vida Sana Senior', label: 'Dog Chow Vida Sana Senior' },
    { value: 'Dog Chow Control de Peso', label: 'Dog Chow Control de Peso' },

    { value: 'Nutrecan Adulto Pollo y Arroz', label: 'Nutrecan Adulto Pollo y Arroz' },
    { value: 'Nutrecan Cachorros Pollo y Arroz', label: 'Nutrecan Cachorros Pollo y Arroz' },
    { value: 'Nutrecan Senior', label: 'Nutrecan Senior' },
    { value: 'Nutrecan Razas Grandes', label: 'Nutrecan Razas Grandes' },
    { value: 'Nutrecan Razas Pequeñas', label: 'Nutrecan Razas Pequeñas' },

    { value: 'Eukanuba Adult Large Breed', label: 'Eukanuba Adult Large Breed' },
    { value: 'Eukanuba Puppy Small Breed', label: 'Eukanuba Puppy Small Breed' },
    { value: 'Eukanuba Performance', label: 'Eukanuba Performance' },
    { value: 'Eukanuba Senior', label: 'Eukanuba Senior' },
    { value: 'Eukanuba Fit Body', label: 'Eukanuba Fit Body' },

    { value: 'Chunky Adultos Carne y Vegetales', label: 'Chunky Adultos Carne y Vegetales' },
    { value: 'Chunky Cachorros Pollo', label: 'Chunky Cachorros Pollo' },
    { value: 'Chunky Senior', label: 'Chunky Senior' },
    { value: 'Chunky Control de Peso', label: 'Chunky Control de Peso' },
    { value: 'Chunky Razas Pequeñas', label: 'Chunky Razas Pequeñas' },

    { value: 'Ringo Adulto Razas Medianas', label: 'Ringo Adulto Razas Medianas' },
    { value: 'Ringo Cachorro', label: 'Ringo Cachorro' },
    { value: 'Ringo Senior', label: 'Ringo Senior' },
    { value: 'Ringo Control de Peso', label: 'Ringo Control de Peso' },
    { value: 'Ringo Razas Grandes', label: 'Ringo Razas Grandes' },

    { value: 'Taste of the Wild High Prairie Canine', label: 'Taste of the Wild High Prairie Canine' },
    { value: 'Taste of the Wild Pacific Stream Canine', label: 'Taste of the Wild Pacific Stream Canine' },
    { value: 'Taste of the Wild Wetlands Canine', label: 'Taste of the Wild Wetlands Canine' },
    { value: 'Taste of the Wild Sierra Mountain Canine', label: 'Taste of the Wild Sierra Mountain Canine' },
    { value: 'Taste of the Wild Southwest Canyon Canine', label: 'Taste of the Wild Southwest Canyon Canine' },

    { value: 'Pedigree Adulto Razas Medianas', label: 'Pedigree Adulto Razas Medianas' },
    { value: 'Pedigree Adulto Razas Pequeñas', label: 'Pedigree Adulto Razas Pequeñas' },
    { value: 'Pedigree Cachorro Razas Medianas', label: 'Pedigree Cachorro Razas Medianas' },
    { value: 'Pedigree Senior', label: 'Pedigree Senior' },
    { value: 'Pedigree Carne y Vegetales', label: 'Pedigree Carne y Vegetales' },
    { value: 'Furminator Deshedding Tool (Perros Grandes)', label: 'Furminator Deshedding Tool (Perros Grandes)' },
    { value: 'Furminator Deshedding Tool (Perros Pequeños)', label: 'Furminator Deshedding Tool (Perros Pequeños)' },
    { value: 'TropiClean Shampoo de Coco y Manzana', label: 'TropiClean Shampoo de Coco y Manzana' },
    { value: 'TropiClean Desenredante para Perros', label: 'TropiClean Desenredante para Perros' },
    { value: 'Vet\'s Best Espuma Limpiadora en Seco', label: 'Vet\'s Best Espuma Limpiadora en Seco' },
    { value: 'Vet\'s Best Spray de Alivio para la Piel Sensible', label: 'Vet\'s Best Spray de Alivio para la Piel Sensible' },
    { value: 'Wahl Shampoo para Perros con Piel Sensible', label: 'Wahl Shampoo para Perros con Piel Sensible' },
    { value: 'Wahl Shampoo de Lavanda', label: 'Wahl Shampoo de Lavanda' },
    { value: 'Hertzko Cepillo Autolimpiante', label: 'Hertzko Cepillo Autolimpiante' },
    { value: 'Hertzko Rastrillo para Quitar Pelo Muerto', label: 'Hertzko Rastrillo para Quitar Pelo Muerto' },

    // Productos de Aseo para Gatos
    { value: 'Furminator Deshedding Tool (Pelo Corto)', label: 'Furminator Deshedding Tool (Pelo Corto)' },
    { value: 'Furminator Deshedding Tool (Pelo Largo)', label: 'Furminator Deshedding Tool (Pelo Largo)' },
    { value: 'Hertzko Cepillo Autolimpiante para Gatos', label: 'Hertzko Cepillo Autolimpiante para Gatos' },
    { value: 'Hertzko Peine para Eliminar Nudos', label: 'Hertzko Peine para Eliminar Nudos' },
    { value: 'Earthbath Oatmeal & Aloe Shampoo (Gatos)', label: 'Earthbath Oatmeal & Aloe Shampoo (Gatos)' },
    { value: 'Earthbath Toallitas para Gatos', label: 'Earthbath Toallitas para Gatos' },
    { value: 'Vet\'s Best Spray Antipulgas para Gatos', label: 'Vet\'s Best Spray Antipulgas para Gatos' },
    { value: 'Vet\'s Best Limpiador para Oídos', label: 'Vet\'s Best Limpiador para Oídos' },
    { value: 'John Paul Pet Oatmeal Shampoo (Gatos)', label: 'John Paul Pet Oatmeal Shampoo (Gatos)' },
    { value: 'John Paul Pet Toallitas para Ojos y Orejas', label: 'John Paul Pet Toallitas para Ojos y Orejas' }, // Juguetes para Perros
    { value: 'Kong Classic', label: 'Kong Classic' },
    { value: 'Kong Extreme', label: 'Kong Extreme' },
    { value: 'Kong Puppy', label: 'Kong Puppy' },
    { value: 'Kong Wobbler', label: 'Kong Wobbler' },
    { value: 'Nerf Dog Pelota de Rebote', label: 'Nerf Dog Pelota de Rebote' },
    { value: 'Nerf Dog Disco Volador', label: 'Nerf Dog Disco Volador' },
    { value: 'Chuckit! Ultra Ball', label: 'Chuckit! Ultra Ball' },
    { value: 'Chuckit! Kick Fetch', label: 'Chuckit! Kick Fetch' },
    { value: 'JW Pet Hol-ee Roller', label: 'JW Pet Hol-ee Roller' },
    { value: 'JW Pet Megalast Ball', label: 'JW Pet Megalast Ball' },
  
    // Juguetes para Gatos
    { value: 'Kong Kickeroo Gato', label: 'Kong Kickeroo Gato' },
    { value: 'Kong Cat Wobbler', label: 'Kong Cat Wobbler' },
    { value: 'Petstages Tower of Tracks', label: 'Petstages Tower of Tracks' },
    { value: 'Petstages Catnip Chew Toys', label: 'Petstages Catnip Chew Toys' },
    { value: 'SmartyKat Feather Whirl', label: 'SmartyKat Feather Whirl' },
    { value: 'SmartyKat Skitter Critters', label: 'SmartyKat Skitter Critters' },
    { value: 'Yeowww! Banana Catnip Toy', label: 'Yeowww! Banana Catnip Toy' },
    { value: 'Yeowww! Pollock Fish Catnip Toy', label: 'Yeowww! Pollock Fish Catnip Toy' },
    { value: 'Jackson Galaxy Air Prey Wand Toy', label: 'Jackson Galaxy Air Prey Wand Toy' },
    { value: 'Jackson Galaxy Ground Prey Wand Toy', label: 'Jackson Galaxy Ground Prey Wand Toy' }, // Accesorios para Perros
    { value: 'Ruffwear Arnés para Perros Front Range', label: 'Ruffwear Arnés para Perros Front Range' },
    { value: 'Ruffwear Correa Knot-a-Leash', label: 'Ruffwear Correa Knot-a-Leash' },
    { value: 'Kurgo Mochila para Perros', label: 'Kurgo Mochila para Perros' },
    { value: 'Kurgo Protector de Asiento para Auto', label: 'Kurgo Protector de Asiento para Auto' },
    { value: 'Kong Collar Reflectante para Perros', label: 'Kong Collar Reflectante para Perros' },
    { value: 'Kong Correa con Elástico para Perros', label: 'Kong Correa con Elástico para Perros' },
    { value: 'PetSafe Arnés Easy Walk', label: 'PetSafe Arnés Easy Walk' },
    { value: 'PetSafe Collar de Adiestramiento Remoto', label: 'PetSafe Collar de Adiestramiento Remoto' },
    { value: 'Outward Hound Chaleco Salvavidas', label: 'Outward Hound Chaleco Salvavidas' },
    { value: 'Outward Hound Mochila Portabebés para Perros', label: 'Outward Hound Mochila Portabebés para Perros' },
  
    // Accesorios para Gatos
    { value: 'Catit Fuente de Agua Flower Fountain', label: 'Catit Fuente de Agua Flower Fountain' },
    { value: 'Catit Comedero Interactivo Senses 2.0', label: 'Catit Comedero Interactivo Senses 2.0' },
    { value: 'PetSafe Puerta para Gatos Microchip', label: 'PetSafe Puerta para Gatos Microchip' },
    { value: 'PetSafe Fuente de Agua para Gatos Drinkwell', label: 'PetSafe Fuente de Agua para Gatos Drinkwell' },
    { value: 'Trixie Árbol para Gatos Valencia', label: 'Trixie Árbol para Gatos Valencia' },
    { value: 'Trixie Hamaca para Ventana', label: 'Trixie Hamaca para Ventana' },
    { value: 'K&H Cama Térmica para Gatos', label: 'K&H Cama Térmica para Gatos' },
    { value: 'K&H Casa para Gatos al Aire Libre', label: 'K&H Casa para Gatos al Aire Libre' },
    { value: 'Litter Genie Contenedor para Arena de Gato', label: 'Litter Genie Contenedor para Arena de Gato' },
    { value: 'Litter Genie Bolsas Desechables', label: 'Litter Genie Bolsas Desechables' }
  ];
  
  export default productOptions