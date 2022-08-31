export default function handler(_req, res) {
  res.setHeader(
    'Set-Cookie',
    'frontend-masteres-auth=false; path=/; expires=Thu, 01 jan 1970 00:00:00 GMT',
  );
  res.json({ status: 'ok' });
}
