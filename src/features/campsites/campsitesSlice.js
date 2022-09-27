import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
};

export const selectAllCampsites = () => {
    return CAMPSITES;
};