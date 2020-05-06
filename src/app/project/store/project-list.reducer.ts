import * as ProjectActions from './project-list.actions';

export interface State {
  projects: any;
}

const initialSate: State = {
  projects: [
    {
      id: 1,
      title: 'Project 1',
      desc: 'Project 1 Desc',
      price: 1000,
    },
    {
      id: 2,
      title: 'Project 2',
      desc: 'Project 2 Desc',
      price: 1500,
    },
  ],
};

export function projectListReducer(state = initialSate, action: ProjectActions.ProjectActions) {
  switch (action.type) {
    case ProjectActions.ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
      break;
      break;
    case ProjectActions.DELETE_PROJECT:
      const index = state.projects.findIndex(t => t.id === action.payload.id);
      const oldProjectsList = [...state.projects];
      oldProjectsList.splice(index, 1);
      return {
        ...state,
        projects: oldProjectsList,
      };
      break;
    default:
      return state;
  }
}
