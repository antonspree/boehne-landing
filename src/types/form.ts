export type InterestType = "photovoltaik" | "waermepumpe";

export type WpHeizung =
  | "gas"
  | "oel"
  | "fernwaerme"
  | "nachtspeicher"
  | "sonstige";

export type WpAlter = "unter5" | "5bis15" | "ueber15";

export type WpGebaeudetyp =
  | "einfamilienhaus"
  | "doppelhaus"
  | "reihenhaus"
  | "mehrfamilienhaus";

export type WpEigentuemer = "ja" | "nein";

export type WpInstallationsort = "innen" | "aussen" | "beides" | "weissnicht";

export type WpZeitraum = "sofort" | "3monate" | "6monate" | "spaeter";

export type WpPvInteresse = "ja" | "nein" | "vielleicht";

export interface FormState {
  interest: InterestType | null;
  pv_speicher: boolean;
  pv_ladestation: boolean;
  pv_dynamisch: boolean;
  pv_v2h: boolean;
  wp_heizung: WpHeizung | null;
  wp_alter: WpAlter | null;
  wp_gebaeudetyp: WpGebaeudetyp | null;
  wp_eigentuemer: WpEigentuemer | null;
  wp_installationsort: WpInstallationsort | null;
  wp_zeitraum: WpZeitraum | null;
  wp_pv_interesse: WpPvInteresse | null;
  name: string;
  telefon: string;
  email: string;
  plz: string;
  ort: string;
  strasse: string;
}

export const initialFormState: FormState = {
  interest: null,
  pv_speicher: false,
  pv_ladestation: false,
  pv_dynamisch: false,
  pv_v2h: false,
  wp_heizung: null,
  wp_alter: null,
  wp_gebaeudetyp: null,
  wp_eigentuemer: null,
  wp_installationsort: null,
  wp_zeitraum: null,
  wp_pv_interesse: null,
  name: "",
  telefon: "",
  email: "",
  plz: "",
  ort: "",
  strasse: "",
};
