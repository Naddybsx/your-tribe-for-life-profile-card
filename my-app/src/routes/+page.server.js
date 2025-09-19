export async function load({ url }) {
  const memberId = 80;
  const res = await fetch(`https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[id][_eq]=${memberId}`);
  const { data } = await res.json();

  return { member: data[0] };
}