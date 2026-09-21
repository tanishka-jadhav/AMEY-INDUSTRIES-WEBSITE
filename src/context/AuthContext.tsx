"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "admin" | "customer";
  companyName?: string;
}

export interface EnquiryItem {
  id: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  requirementType: string;
  product?: string;
  quantity?: string;
  message?: string;
  status: "New" | "Contacted" | "Quote Sent" | "Completed";
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  enquiries: EnquiryItem[];
  login: (email: string, pass: string) => { success: boolean; error?: string };
  signup: (name: string, email: string, phone: string, pass: string) => { success: boolean; error?: string };
  logout: () => void;
  addEnquiry: (enquiry: Omit<EnquiryItem, "id" | "createdAt" | "status">) => void;
  updateEnquiryStatus: (id: string, newStatus: EnquiryItem["status"]) => void;
  deleteEnquiry: (id: string) => void;
}

const INITIAL_ENQUIRIES: EnquiryItem[] = [
  {
    id: "ENQ-9081",
    name: "Rajesh Sharma",
    phone: "+91 9823456789",
    email: "rajesh.sharma@gmail.com",
    city: "Nashik, MH",
    requirementType: "Green Gym",
    product: "Outdoor Air Walker",
    quantity: "4 Units",
    message: "Requirement for residential society garden near College Road Nashik.",
    status: "New",
    createdAt: "2026-09-21T14:30:00Z",
  },
  {
    id: "ENQ-9082",
    name: "Sunil Deshmukh",
    phone: "+91 9422114455",
    email: "sunil.d@infra-build.com",
    city: "Pune, MH",
    requirementType: "Playground Equipment",
    product: "Multi-Play Combination Station",
    quantity: "2 Sets",
    message: "Public park project tender quotation needed urgently.",
    status: "Contacted",
    createdAt: "2026-09-21T11:15:00Z",
  },
  {
    id: "ENQ-9083",
    name: "Vikram Patil",
    phone: "+91 9890123456",
    email: "patil.fabrication@yahoo.com",
    city: "Sinnar, Nashik",
    requirementType: "Industrial Fabrication",
    product: "Custom Heavy Steel Shed Frame",
    quantity: "1 Project",
    message: "Attached technical drawings for structural steel roof trusses.",
    status: "Quote Sent",
    createdAt: "2026-09-20T16:45:00Z",
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(INITIAL_ENQUIRIES);

  // Load state from localStorage on initial render
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("amey_user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }

      const savedEnquiries = localStorage.getItem("amey_enquiries");
      if (savedEnquiries) {
        setEnquiries(JSON.parse(savedEnquiries));
      }
    } catch (e) {
      console.error("Failed to load auth state from local storage:", e);
    }
  }, []);

  // Sync enquiries to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem("amey_enquiries", JSON.stringify(enquiries));
    } catch (e) {
      console.error("Failed to save enquiries:", e);
    }
  }, [enquiries]);

  const login = (email: string, pass: string) => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Admin Credential Check
    if (
      (cleanEmail === "psj.smil@gmail.com" || cleanEmail === "admin@ameyindustries.com" || cleanEmail === "admin") &&
      (pass === "admin123" || pass === "amey2026" || pass === "admin")
    ) {
      const adminUser: User = {
        id: "USR-ADMIN-1",
        name: "Mr. Prasad Suresh Jadhav (Admin)",
        email: "psj.smil@gmail.com",
        phone: "+91 9850573181",
        role: "admin",
        companyName: "AMEY INDUSTRIES",
      };
      setUser(adminUser);
      localStorage.setItem("amey_user", JSON.stringify(adminUser));
      return { success: true };
    }

    // Customer Login Check (stored users or fallback)
    const storedUsersJson = localStorage.getItem("amey_registered_users");
    const registeredUsers: (User & { password?: string })[] = storedUsersJson ? JSON.parse(storedUsersJson) : [];

    const found = registeredUsers.find((u) => u.email.toLowerCase() === cleanEmail && u.password === pass);

    if (found) {
      const { password, ...customerUser } = found;
      setUser(customerUser);
      localStorage.setItem("amey_user", JSON.stringify(customerUser));
      return { success: true };
    }

    // Demo Customer Quick Login if using demo email
    if (cleanEmail.includes("@") && pass.length >= 4) {
      const newCustomerUser: User = {
        id: `USR-${Date.now()}`,
        name: cleanEmail.split("@")[0].toUpperCase(),
        email: cleanEmail,
        role: "customer",
      };
      setUser(newCustomerUser);
      localStorage.setItem("amey_user", JSON.stringify(newCustomerUser));
      return { success: true };
    }

    return { success: false, error: "Invalid email or password. For Admin, use psj.smil@gmail.com / admin123" };
  };

  const signup = (name: string, email: string, phone: string, pass: string) => {
    if (!name || !email || !pass) {
      return { success: false, error: "Please fill in all required fields." };
    }

    const cleanEmail = email.trim().toLowerCase();
    const newUserRecord = {
      id: `USR-${Date.now()}`,
      name,
      email: cleanEmail,
      phone,
      role: "customer" as const,
      password: pass,
    };

    try {
      const existingJson = localStorage.getItem("amey_registered_users");
      const existing: any[] = existingJson ? JSON.parse(existingJson) : [];
      existing.push(newUserRecord);
      localStorage.setItem("amey_registered_users", JSON.stringify(existing));

      const { password, ...cleanUser } = newUserRecord;
      setUser(cleanUser);
      localStorage.setItem("amey_user", JSON.stringify(cleanUser));
      return { success: true };
    } catch (err) {
      return { success: false, error: "Registration failed. Please try again." };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("amey_user");
  };

  const addEnquiry = (enquiryData: Omit<EnquiryItem, "id" | "createdAt" | "status">) => {
    const newItem: EnquiryItem = {
      ...enquiryData,
      id: `ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: "New",
    };
    setEnquiries((prev) => [newItem, ...prev]);
  };

  const updateEnquiryStatus = (id: string, newStatus: EnquiryItem["status"]) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        enquiries,
        login,
        signup,
        logout,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
