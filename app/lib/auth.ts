// Local auth helpers — localStorage-based MVP auth for PATT admin panel.

export interface PattUser {
  email: string;
  name: string;
  clinicName: string;
  city: string;
  country: string;
}

interface StoredUser extends PattUser {
  password: string;
}

const USERS_KEY = "patt_users";
const SESSION_KEY = "patt_session";

function getUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/** Register a new clinic admin. Returns error string or null on success. */
export function register(data: {
  name: string;
  clinicName: string;
  city: string;
  country: string;
  email: string;
  password: string;
}): string | null {
  const users = getUsers();
  if (users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
    return "Ya existe una cuenta con este correo electrónico.";
  }
  users.push({
    email: data.email.toLowerCase(),
    name: data.name,
    clinicName: data.clinicName,
    city: data.city,
    country: data.country,
    password: data.password,
  });
  saveUsers(users);
  // Auto-login after registration
  setSession({
    email: data.email.toLowerCase(),
    name: data.name,
    clinicName: data.clinicName,
    city: data.city,
    country: data.country,
  });
  return null;
}

/** Login with email + password. Returns error string or null on success. */
export function login(email: string, password: string): string | null {
  const users = getUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) {
    return "Correo o contraseña incorrectos.";
  }
  setSession({
    email: user.email,
    name: user.name,
    clinicName: user.clinicName,
    city: user.city,
    country: user.country,
  });
  return null;
}

/** Get current session user, or null if not logged in. */
export function getSession(): PattUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setSession(user: PattUser) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

/** Clear session (logout). */
export function logout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}
