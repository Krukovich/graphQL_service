import { IContext, Track } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';

export const tracksMutation: {
  createTrack: (_: null, data: Track, context: IContext) => Promise<Track>;
  updateTrack: (_: null, data: Track, context: IContext) => Promise<Track>;
  deleteTrack: (_: null, data: Track, context: IContext) => Promise<void>;
} = {
  createTrack: async (_: null, data: Track, context: IContext): Promise<Track> => {
    return await http.post(ENDPOINTS.TRACKS, data, context);
  },
  updateTrack: async (_: null, data: Track, context: IContext): Promise<Track> => {
    const { id }: { id: string } = data;
    return await http.put(`${ENDPOINTS.TRACKS}${id}`, data, context);
  },
  deleteTrack: async (_: null, data: { id: string }, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.TRACKS}${id}`, data, context);
  },
};

export const tracksQuery: {
  getTracks: () => Promise<Track[]>;
  getTrackById: (_: null, data: { id: string }) => Promise<Track>;
} = {
  getTracks: async (): Promise<Track[]> => {
    const data = await http.get(ENDPOINTS.TRACKS);
    return data.items;
  },
  getTrackById: async (_: null, data: { id: string }): Promise<Track> => {
    const { id }: { id: string } = data;
    return await http.get(`${ENDPOINTS.TRACKS}${id}`);
  },
};
