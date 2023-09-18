import { createAction, props } from '@ngrx/store';

export const addDataAction = createAction(
    'ADD', 
    props<{ newData: string }>()
);

export const updateDataAction = createAction(
  'UPDATE',
  props<{ updatedData: string }>()
);

export const removeDataAction = createAction(
  'REMOVE',
  props<{ dataToRemove: string }>()
);
