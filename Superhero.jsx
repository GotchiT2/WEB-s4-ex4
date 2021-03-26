/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */

const Superhero = (props) => (
  <tr>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.publisher}</td>
    <td><img src={props.img} /></td>
  </tr>
);

export default Superhero;
