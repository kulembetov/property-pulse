const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
const fetchProperties = async () => {
  try {
    if (!apiDomain) return [];
    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchProperty = async (id) => {
  try {
    if (!apiDomain) return null;
    const res = await fetch(`${apiDomain}/properties`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };
