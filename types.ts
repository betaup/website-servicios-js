import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Client {
  id: string;
  name: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  avatarUrl: string;
}

export interface Brand {
  id: string;
  name: string;
  logoUrl?: string;
}