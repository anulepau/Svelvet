import Node from '$lib/Nodes/index.svelte';
import TestNode from './TestNodeSlot.svelte';
import { render, screen } from '@testing-library/svelte';

const mockNodes = [
  {
    id: 1,
    type: 'input',
    position: { x: 100, y: 50 },
    data: { label: 'test-node-1' },
    width: 175,
    height: 40,
    bgColor: 'white'
  },
  {
    id: 2,
    type: 'default',
    position: { x: 200, y: 250 },
    data: { label: 'test-node-2' },
    width: 175,
    height: 40,
    bgColor: 'white'
  }
];

test('should mount the node wrapper div', () => {
  const { container } = render(Node, { node: mockNodes[0] });
  expect(container.getElementsByClassName('Node')).toBeTruthy();
});

test('should display node labels in slot', () => {
  render(TestNode, { props: { node: mockNodes[0] } });
  render(TestNode, { props: { node: mockNodes[1] } });
  expect(screen.getByText('test-node-1')).toBeInTheDocument();
  expect(screen.getByText('test-node-2')).toBeInTheDocument();
});
