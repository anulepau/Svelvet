<script>
  import Svelvet from '$lib/Containers/Svelvet/index.svelte';
  // import Svelvet from 'svelvet';

  const initialNodes = [
    {
      id: 1,
      position: { x: 300, y: 50 },
      data: { label: 'Input Node' },
      width: 175,
      height: 40,
      bgColor: 'white'
    },
    {
      id: 2,
      position: { x: 125, y: 150 },
      data: { label: 'Option #1' },
      width: 175,
      height: 40,
      bgColor: '#B8FFC6',
      borderColor: 'transparent'
    },
    {
      id: 3,
      position: { x: 475, y: 150 },
      data: { label: 'Option #2' },
      width: 175,
      height: 40,
      bgColor: '#FFB8B8',
      borderColor: 'transparent'
    },
    {
      id: 4,
      position: { x: 300, y: 250 },
      data: { label: 'Output Node' },
      width: 175,
      height: 40,
      bgColor: 'white'
    }
  ];
  const initialEdges = [
    { id: 'e1-2', source: 1, target: 2, label: '  YES  ' },
    { id: 'e2-3', source: 1, target: 3, label: '  NO  ' },
    { id: 'e2-4', source: 2, target: 4, animate: true },
    { id: 'e2-5', source: 3, target: 4, animate: true }
  ];
</script>

<Svelvet nodes={initialNodes} edges={initialEdges} width={1000} background />
