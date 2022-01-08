import { render } from '@testing-library/react';
import App from '../App';

import mockAPI from './mockAPI';
import mockIndex from './mockIndex';

import ProjectCard from '../components/ProjectCard';
import ProjectDetails from '../components/ProjectDetails';

import TrendingProject from '../components/TrendingProject';

import reducer, { search, addProjects } from '../redux/trendingSlice';

global.fetch = jest.fn(mockAPI);
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it('renders App snapshot', () => {
  const tree = render(mockIndex(App, []));
  expect(tree).toMatchSnapshot();
});

it('renders ProjectDetails snapshot', () => {
  const tree = render(mockIndex(ProjectDetails, []));
  expect(tree).toMatchSnapshot();
});

it('renders ProjectCard snapshot', () => {
  const tree = render(mockIndex(ProjectDetails, []));
  expect(tree).toMatchSnapshot();
});

test('renders trending project card properly', async () => {
  const response = await mockAPI('correct-url');
  const projects = await response.json();
  const project = projects[0];
  const rendered = render(mockIndex(ProjectCard, project));

  const heading = rendered.container.querySelector('h1');

  expect(heading.textContent).toBe(' Github Trending ');
});

test('renders trending project page', async () => {
  const response = await mockAPI('correct-url');
  const projects = await response.json();
  const project = projects[0];
  const rendered = render(mockIndex(TrendingProject, project));

  const heading = rendered.container.querySelector('h1');

  expect(heading.textContent).toBe(' Github Trending ');
});

test('returns correct project response', async () => {
  const response = await mockAPI('correct-url');
  const projects = await response.json();
  const project = projects[0];

  expect(project.repositoryName).toBe('incubator-seatunnel');
});

test('returns correct project response', async () => {
  const response = await mockAPI('correct-url');
  const projects = await response.json();
  const project = projects[0];

  expect(project.repositoryName).toBe('incubator-seatunnel');
});

test('reducer returns correct newState when you search somethign', async () => {
  const initialState = { search: '', status: '', projects: [] };
  const newState = reducer(initialState, search('SearchString'));

  expect(newState).toStrictEqual({ projects: [], search: 'SearchString', status: '' });
});

test('reducer returns correct newState when you add projects', async () => {
  const response = await mockAPI('correct-url');
  const projects = await response.json();
  const initialState = { search: '', status: '', projects: [] };
  const newState = reducer(initialState, addProjects(projects));

  expect(newState).toStrictEqual({ projects, search: '', status: '' });
});
