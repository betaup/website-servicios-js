import {
  Wind,
  Zap,
  Sun,
  ShieldCheck,
  Clock,
  UserCheck,
  Award,
  Wrench,
  Hammer,
  ClipboardList,
  Smile
} from 'lucide-react';
import { Service, Benefit, Stat, Client, Review, Brand } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ac',
    title: 'Aire Acondicionado',
    description: 'Instalación, mantenimiento preventivo, correctivo y reparación de sistemas de climatización residencial y comercial.',
    icon: Wind,
  },
  {
    id: 'electric',
    title: 'Electricidad General',
    description: 'Soluciones eléctricas seguras. Cableado, cuadros eléctricos, iluminación y reparaciones de urgencia.',
    icon: Zap,
  },
  {
    id: 'solar',
    title: 'Paneles Solares',
    description: 'Instalación y mantenimiento de sistemas fotovoltaicos para maximizar tu ahorro energético y sostenibilidad.',
    icon: Sun,
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: 'exp',
    title: 'Experiencia Comprobada',
    description: 'Años de servicio técnico especializado nos respaldan.',
    icon: Award,
  },
  {
    id: 'speed',
    title: 'Atención Rápida',
    description: 'Sabemos que el tiempo es oro. Respuesta ágil a tus urgencias.',
    icon: Clock,
  },
  {
    id: 'guarantee',
    title: 'Garantía de Servicio',
    description: 'Trabajos garantizados para tu total tranquilidad y seguridad.',
    icon: ShieldCheck,
  },
  {
    id: 'personal',
    title: 'Trato Personalizado',
    description: 'Cada cliente es único. Adaptamos la solución a tu necesidad.',
    icon: UserCheck,
  },
];

export const STATS: Stat[] = [
  { id: '1', value: '+800', label: 'Mantenimientos', icon: Wrench }, // Featured stat - placed first
  { id: '2', value: '+500', label: 'Instalaciones', icon: Hammer },
  { id: '3', value: '+1200', label: 'Reparaciones', icon: ClipboardList },
  { id: '4', value: '98%', label: 'Clientes Felices', icon: Smile },
];

export const CLIENTS: Client[] = [
  { id: 'c1', name: 'Hotel Plaza' },
  { id: 'c2', name: 'Restaurante El Fogón' },
  { id: 'c3', name: 'Torres Corporativas A&B' },
  { id: 'c4', name: 'Escuela Moderna' },
  { id: 'c5', name: 'Clínica San José' },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Carlos Mendoza',
    role: 'Gerente de Operaciones',
    text: 'El mantenimiento a nuestros aires acondicionados fue impecable. Puntuales y muy limpios al trabajar. Altamente recomendados.',
    avatarUrl: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: 'r2',
    name: 'Ana García',
    role: 'Dueña de Casa',
    text: 'Me salvaron en pleno verano cuando mi aire dejó de funcionar. La respuesta por WhatsApp fue inmediata.',
    avatarUrl: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: 'r3',
    name: 'Roberto Dávila',
    role: 'Administrador de Condominio',
    text: 'Excelente servicio en la instalación de los paneles solares para las áreas comunes. Muy profesionales.',
    avatarUrl: 'https://picsum.photos/100/100?random=3',
  },
];

export const BRANDS: Brand[] = [
  { id: 'b1', name: 'Carrier', logoUrl: '/assets/carrier.png' },
  { id: 'b2', name: 'Trane', logoUrl: '/assets/trane.png' },
  { id: 'b3', name: 'York', logoUrl: '/assets/york.png' },
  { id: 'b4', name: 'Daikin', logoUrl: '/assets/daikin.png' },
  { id: 'b5', name: 'LG', logoUrl: '/assets/LG.svg' },
  { id: 'b6', name: 'Samsung', logoUrl: '/assets/Samsung.svg' },
  { id: 'b7', name: 'Mirage', logoUrl: '/assets/mirage.png' },
  { id: 'b8', name: 'Midea', logoUrl: '/assets/midea.png' },
];

export const CONTACT_INFO = {
  phone: '+52 55 1234 5678',
  email: 'contacto@controlyeficienciajs.com',
  address: 'Av. Principal 123, Zona Centro, Ciudad',
  whatsappUrl: 'https://wa.me/525512345678', // Replace with real number
};
