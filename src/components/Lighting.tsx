export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, 5, -10]} intensity={0.5} color="lightblue" />
      <pointLight position={[10, 5, 10]} intensity={0.5} color="pink" />
    </>
  );
}
