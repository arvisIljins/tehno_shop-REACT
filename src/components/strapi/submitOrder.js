import axios from 'axios';
import url from '../../utils/URL';
async function submitOrder({
  name,
  phone,
  country,
  city,
  address,
  postcode,
  cartName,
  total,
  items,
  stripeTokenId,
  userToken,
  info,
}) {
  const response = await axios
    .post(
      `${url}/orders`,
      {
        name,
        phone,
        country,
        city,
        address,
        postcode,
        cartName,
        total,
        items,
        stripeTokenId,
        userToken,
        info,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => console.log(error));
  return response;
}

export default submitOrder;
