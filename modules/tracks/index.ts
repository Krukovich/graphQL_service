import { Track } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

//TODO ADD MUTATION
export const TracksMutation = {
  createTrack: () => {
    const http: HTTP = new HTTP();
  },
  deleteTrack: () => {
    const http: HTTP = new HTTP();
  },
  updateTrack: () => {
    const http: HTTP = new HTTP();
  },
};

export const TracksQuery: {
  getTracks: () => Promise<Track[]>;
} = {
  getTracks: async (): Promise<Track[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.TRACKS);
    return data.items;
  },
};
