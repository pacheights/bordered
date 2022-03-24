export interface BaseOrder {
  to: string;
  from: string;
  note: string;
  photoWallConsent: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  pi: string;
}

export interface OrderRequest extends BaseOrder {
  img1?: string;
  img2?: string;
}

export interface OrderDbEntry extends OrderRequest {
  timestamp: string;
}
