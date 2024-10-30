import { ADD_MEDICINE } from "../actions/medicineActions";

const initialState = {
  categories: {
    "Pain Relief": { stock: 50000000, medicines: [{ id: 1, name: "Aspirin", count: 0 }, { id: 2, name: "Ibuprofen", count: 0 }, { id: 3, name: "Codeine", count: 0 }, { id: 4, name: "Naproxen (Aleve)", count: 0 }, { id: 5, name: "Acetaminophen (Tylenol)", count: 0 }]},
    "Cold & Flu": { stock: 50000000, medicines: [{ id: 1, name: "Diphenhydramine (Benadryl)", count: 0 }, { id: 2, name: "Phenylephrine (Sudafed PE)", count: 0 }, { id: 3, name: "Guaifenesin (Mucinex)", count: 0 }, { id: 4, name: "Dextromethorphan (Robitussin)", count: 0 }, { id: 5, name: "Oxymetazoline (Afrin)", count: 0 }]},
    "Antibiotics": { stock: 50000000, medicines: [{ id: 1, name: "Amoxicillin", count: 0 }, { id: 2, name: "Ciprofloxacin", count: 0 }, { id: 3, name: "Azithromycin", count: 0 }, { id: 4, name: "Doxycycline", count: 0 }, { id: 5, name: "Penicillin", count: 0 }]},
    "Antihistamines (Allergies)": { stock: 50000000, medicines: [{ id: 1, name: "Cetirizine (Zyrtec)", count: 0 }, { id: 2, name: "Loratadine (Claritin)", count: 0 }, { id: 3, name: "Fexofenadine (Allegra)", count: 0 }, { id: 4, name: "Fexofenadine (Allegra)", count: 0 }, { id: 5, name: "Chlorpheniramine", count: 0 }]},
    "Antacids (Digestive Health)": { stock: 5000000, medicines: [{ id: 1, name: "Calcium Carbonate (Tums)", count: 0 }, { id: 2, name: "Ranitidine (Zantac)", count: 0 }, { id: 3, name: "Omeprazole (Prilosec)", count: 0 }, { id: 4, name: "Esomeprazole (Nexium)", count: 0 }, { id: 5, name: "Magnesium Hydroxide (Milk of Magnesia)", count: 0 }]},
    "Vitamins & Supplements": { stock: 50000000, medicines: [{ id: 1, name: "Vitamin D", count: 0 }, { id: 2, name: "Vitamin C", count: 0 }, { id: 3, name: "Calcium", count: 0 }, { id: 4, name: "Iron", count: 0 }, { id: 5, name: "Folic Acid", count: 0 }]},
    "Anti-inflammatory (NSAIDs)": { stock: 5000000, medicines: [{ id: 1, name: "Ibuprofen (Advil)", count: 0 }, { id: 2, name: "Naproxen (Aleve)", count: 0 }, { id: 3, name: "Celecoxib (Celebrex)", count: 0 }, { id: 4, name: "Indomethacin", count: 0 }]},
    "Cardiovascular": { stock: 50000000, medicines: [{ id: 1, name: "Atorvastatin (Lipitor) – Cholesterol-lowering", count: 0 }, { id: 2, name: "Metoprolol – Beta-blocker", count: 0 }, { id: 3, name: "Lisinopril – ACE inhibitor", count: 0 }, { id: 4, name: "Amlodipine – Calcium channel blocker", count: 0 }, { id: 5, name: "Losartan – Angiotensin II receptor blocker", count: 0 }]},
    "Diabetes Management": { stock: 500000000, medicines: [{ id: 1, name: "Metformin", count: 0 }, { id: 2, name: "Insulin (Humalog, Lantus)", count: 0 }, { id: 3, name: "Glipizide", count: 0 }, { id: 4, name: "Sitagliptin (Januvia)", count: 0 }, { id: 5, name: "Sitagliptin (Januvia)", count: 0 }]},
    "Antifungal": { stock: 50000000, medicines: [{ id: 1, name: "Clotrimazole", count: 0 }, { id: 2, name: "Fluconazole", count: 0 }, { id: 3, name: "Miconazole", count: 0 }, { id: 4, name: "Terbinafine (Lamisil)", count: 0 }, { id: 5, name: "Nystatin", count: 0 }]},
  },
  total: 0,
};

const medicineReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEDICINE: {
      const { medicine, quantity } = action.payload;
      const newCategories = { ...state.categories };

      // Ensure the category exists before trying to access its medicines
      if (newCategories[medicine.category]) {
        const selectedMedicine = newCategories[medicine.category].medicines.find(m => m.id === medicine.id);
        
        if (selectedMedicine) {
          selectedMedicine.count += quantity; // Update medicine count
          newCategories[medicine.category].stock -= quantity; // Decrease stock
        } else {
          console.warn(`Medicine with ID ${medicine.id} not found in category ${medicine.category}`);
        }
      } else {
        console.warn(`Category ${medicine.category} does not exist`);
      }

      const newTotal = state.total + quantity; // Update total medicines added
      
      return { ...state, categories: newCategories, total: newTotal };
    }

    default:
      return state;
  }
};

export default medicineReducer;
