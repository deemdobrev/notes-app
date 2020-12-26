export const PATH_PARAM_ID = ':id';

export const ROUTE_HOME = '/';
export const ROUTE_NOTES = '/notes';
export const ROUTE_CREATE_NOTE = '/create';
export const ROUTE_VIEW_NOTE = `${ROUTE_NOTES}/${PATH_PARAM_ID}`;
export const ROUTE_EDIT_NOTE = `${ROUTE_NOTES}/${PATH_PARAM_ID}/edit`;

export const ROUTES_WITH_CURRENT_NOTE = [
  ROUTE_EDIT_NOTE,
  ROUTE_VIEW_NOTE,
  ROUTE_NOTES,
];
