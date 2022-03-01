import axios from "axios";

export const isTeacher = (bool) => ({ 
  type: 'IS_TEACHER',
  payload: bool
});

export const loadSettings = (category, difficulty) => ({ 
  type: 'LOAD_SETTINGS',
  payload: { category, difficulty }
});

export const isMulti = (bool) => ({ 
  type: 'IS_MULTI',
  payload: bool
});

export const updateScore = (score) => ({ 
  type: 'UPDATE_SCORE',
  payload: score
});
