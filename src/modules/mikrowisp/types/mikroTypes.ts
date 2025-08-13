export interface MikroLoginDTO {
  identification: string;
}

export interface MikroUser {
  id: number;
  nombre: string;
  estado: "SUSPENDIDO" | "ACTIVO";
  correo: string;
  telefono: string;
  movil: string;
  cedula: string;
  pasarela: string;
  codigo: string;
  direccion_principal: string;
  mantenimiento: boolean;
  fecha_suspendido: string;
  servicios: [
    {
      id: number;
      idperfil: number;
      nodo: number;
      costo: string;
      ipap: string;
      mac: string;
      ip: string;
      instalado: string;
      pppuser: string;
      ppppass: string;
      emisor: string;
      tiposervicio: string;
      status_user: string;
      coordenadas: string;
      direccion: string;
      snmp_comunidad: string;
      firewall_state: string;
      smartolt: string;
      limitado: number;
      ppp_routes: string;
      ppp_localaddress: string;
      idnap: number;
      portnap: number;
      onu_sn: string;
      onu_ssid_wifi: string;
      onu_password_wifi: string;
      personalizados: string;
      smartolt_catv: number;
      ipv6: string;
      ipv6_duid: string;
      last_connected: string;
      trapemn_id: number;
      trapemn_data: null;
      perfil: string;
    }
  ];
  facturacion: {
    facturas_nopagadas: number;
    total_facturas: string;
  };
}
// export interface AuthState {
//   isAuthenticated: boolean;
//   user: User | null;
//   token: string | null;
// }

// export type AuthAction =
//   | { type: "LOGIN"; payload: { user: User; token: string } }
//   | { type: "LOGOUT" };

// export interface AuthContextType {
//   state: AuthState;
//   dispatch: Dispatch<AuthAction>;
// }
