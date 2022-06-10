export default function RowBookings({
  initial_hour,
  end_hour,
  first_name,
  last_name,
  social_space,
}) {
  return (
    <tbody>
      <tr>
        <th className="text-center">{initial_hour}hs</th>
        <td className="text-center">{end_hour}hs</td>
        <td className="text-center">{end_hour - initial_hour}</td>
        <td className="text-center">{first_name + " " + last_name}</td>
        <td className="text-center">{social_space}</td>
      </tr>
    </tbody>
  );
}
