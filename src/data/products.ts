export interface Product {
  id: string;
  name: string;
  category: string;
  audience: ('men' | 'women' | 'kids')[];
  description: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string[];
  image: string;
  accent: string;
}

export const products: Product[] = [
  {
    id: "douvere-daily-face-wash",
    name: "Douvère Daily Face Wash",
    category: "Face Care",
    audience: ["men", "women"],
    description: "Gentle everyday cleansing for fresh, balanced skin.",
    benefits: [
      "Removes everyday impurities",
      "Helps maintain fresh-looking skin",
      "Gentle for daily use"
    ],
    ingredients: ["Aloe Vera", "Vitamin E", "Niacinamide"],
    howToUse: [
      "Wet face with lukewarm water.",
      "Apply a small amount to hands and lather.",
      "Gently massage onto face in circular motions.",
      "Rinse thoroughly and pat dry."
    ],
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
    accent: "bg-blue-600"
  },
  {
    id: "douvere-hydrating-moisturizer",
    name: "Hydrating Daily Moisturizer",
    category: "Skin Care",
    audience: ["men", "women"],
    description: "Lightweight, non-greasy hydration for all skin types.",
    benefits: [
      "Provides 24-hour moisture",
      "Absorbs quickly without sticky residue",
      "Leaves skin feeling soft and smooth"
    ],
    ingredients: ["Hyaluronic Acid", "Ceramides", "Shea Butter"],
    howToUse: [
      "Apply a dime-sized amount to clean face and neck.",
      "Gently massage in upward strokes until fully absorbed.",
      "Use daily, morning and night."
    ],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    accent: "bg-pink-500"
  },
  {
    id: "douvere-kids-gentle-shampoo",
    name: "Kids Gentle Wash & Shampoo",
    category: "Kids Care",
    audience: ["kids"],
    description: "Tear-free, mild cleansing for delicate hair and skin.",
    benefits: [
      "Tear-free formula",
      "Cleanses without drying",
      "Hypoallergenic and dermatologist-tested"
    ],
    ingredients: ["Calendula Extract", "Oat Kernel Extract", "Glycerin"],
    howToUse: [
      "Apply to wet hair and body.",
      "Lather gently.",
      "Rinse thoroughly with warm water."
    ],
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
    accent: "bg-lime-500"
  },
  {
    id: "douvere-revitalizing-body-wash",
    name: "Revitalizing Body Wash",
    category: "Body Care",
    audience: ["men", "women"],
    description: "An invigorating body wash that awakens the senses and cleanses deeply.",
    benefits: [
      "Rich, foaming lather",
      "Energizing scent profile",
      "Leaves skin feeling refreshed"
    ],
    ingredients: ["Citrus Extract", "Green Tea", "Aloe Vera"],
    howToUse: [
      "Squeeze onto a wet washcloth or sponge.",
      "Work into a rich lather over the body.",
      "Rinse well."
    ],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
    accent: "bg-orange-500"
  },
  {
    id: "douvere-men-beard-oil",
    name: "Conditioning Beard Oil",
    category: "Grooming",
    audience: ["men"],
    description: "Softens coarse hair and nourishes the skin underneath for a comfortable beard.",
    benefits: [
      "Reduces beard itch",
      "Softens facial hair",
      "Promotes healthy beard growth"
    ],
    ingredients: ["Argan Oil", "Jojoba Oil", "Vitamin E"],
    howToUse: [
      "Apply 2-3 drops into palms.",
      "Massage evenly into the beard and skin underneath.",
      "Use daily for best results."
    ],
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800",
    accent: "bg-violet-700"
  },
  {
    id: "douvere-radiance-serum",
    name: "Radiance Boost Serum",
    category: "Face Care",
    audience: ["women"],
    description: "A concentrated serum designed to brighten and even out skin tone.",
    benefits: [
      "Brightens complexion",
      "Reduces appearance of dark spots",
      "Improves skin texture"
    ],
    ingredients: ["Vitamin C", "Niacinamide", "Licorice Root Extract"],
    howToUse: [
      "Apply 3-4 drops to clean, dry skin.",
      "Gently pat into face and neck until absorbed.",
      "Follow with moisturizer. Use sunscreen during the day."
    ],
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7ce811cc?auto=format&fit=crop&q=80&w=800",
    accent: "bg-pink-400"
  }
];

export const ingredients = [
  {
    name: "Aloe Vera",
    description: "Known for its soothing and hydrating properties. Perfect for calming irritated skin.",
    image: "https://images.unsplash.com/photo-1596755389378-c11ddece8d47?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Vitamin E",
    description: "A popular antioxidant used in skin-care formulations to protect against environmental stressors.",
    image: "https://images.unsplash.com/photo-1615397323145-21d9607eb509?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Niacinamide",
    description: "A versatile skincare ingredient used to support skin appearance, balance oil, and improve texture.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Shea Butter",
    description: "Known for its intense moisturizing properties, leaving skin feeling soft and supple.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800"
  }
];
