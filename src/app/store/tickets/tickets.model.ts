export interface Ticket {
  id: number;
  title: string;
  createdAt: string;
  someText: string;
}

export type TicketState = {
  isLoading: boolean;
  tickets: Ticket[];
  selectedTicket: number | null;
};
