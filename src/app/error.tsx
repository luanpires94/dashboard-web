"use client";

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  return (
    <div style={{ padding: 24 }}>
      <h2>Algo deu errado</h2>
      <p style={{ marginTop: 8 }}>{error.message}</p>
    </div>
  );
}
