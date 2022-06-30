import { IContext, Track } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

export const TracksMutation: {
  createTrack: (_: null, data: Track, context: IContext) => Promise<Track>;
  updateTrack: (_: null, data: Track, context: IContext) => Promise<Track>;
  deleteTrack: (_: null, data: Track, context: IContext) => Promise<Track>;
} = {
  createTrack: async (_: null, data: Track, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.post(ENDPOINTS.TRACKS, data, context);
  },
  updateTrack: async (_: null, data: Track, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.put(ENDPOINTS.TRACKS, data, context);
  },
  deleteTrack: async (_: null, data: Track, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.delete(ENDPOINTS.TRACKS, data, context);
  },
};

export const TracksQuery: {
  getTracks: () => Promise<Track[]>;
  getTrackById: (_: null, data: { id: string }) => Promise<Track>;
} = {
  getTracks: async (): Promise<Track[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.TRACKS);
    return data.items;
  },
  getTrackById: async (_: null, data: { id: string }): Promise<Track> => {
    const { id }: { id: string } = data;
    const http: HTTP = new HTTP();
    return await http.get(`${ENDPOINTS.TRACKS}${id}`);
  },
};
