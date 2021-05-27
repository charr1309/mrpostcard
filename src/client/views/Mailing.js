import React, { Component } from "react";
import FadeIn from "react-fade-in";

export default class Mailing extends Component {
  render() {
    return (
      <FadeIn>
        <div>
          <h1>Mailing Services</h1>
          <h2>
            We will mail more than just postcards: Also choose Mr PostCard for
            your next newsletter, sales letter, thank you card, or invitation.
          </h2>
          <p>Mailing fees include...</p>
          <ul>
            <li>
              Using your importable mailing list (Excel, dBase, CSV, ASCII
              file), or we can help you purchase a specialty list
            </li>
            <li>Addressing directly on mail piece</li>
            <li>Purging duplicate addresses</li>
            <li>Address delivery report</li>
            <li>Graphic layout of address panel message</li>
            <li>CASS certifying and barcoding list</li>
            <li>
              Merging and printing address, barcode and address side message
            </li>
            <li>Preparing and delivering to bulk mail</li>
            <li>Standard A Mail postage paid</li>
            <li>
              Upgrade to First Class Presort for an additional 10¢ for jumbo
              postcards in quantities of 500 or more. Standard-size postcards
              can be mailed First Class Presort at no additional cost for
              quantities of 500 or more.
            </li>
            <li>Additional postage for non-barcodable addresses</li>
            <li>
              Need your client list converted to an importable file? We will
              enter your list for $20 per 100 addresses. (First, Last, Address,
              City, State and Zip) .
            </li>
            <li>
              Do you qualify for non-profit mail rates? We can guide you in
              obtaining non-profit status at the post office and mailing for
              lower rates!
            </li>
            <li>
              Sending something other than a postcard? We can help provide your
              finishing services too. Call for pricing based on your specific
              needs.
            </li>
          </ul>
          <table>
            <th>
              <td>Quantity</td>
              <td>Fee per piece</td>
            </th>
            <tr>
              <td>1 - 199</td>
              <td>43¢, plus $15 setup fee*</td>
            </tr>
            <tr>
              <td>200 - 499</td>
              <td>41¢</td>
            </tr>
            <tr>
              <td>500 - 999</td>
              <td>39¢</td>
            </tr>
            <tr>
              <td>1,000 - 1,999</td>
              <td>36¢</td>
            </tr>
            <tr>
              <td>2,000 +</td>
              <td>34¢</td>
            </tr>
          </table>
          <p>*We waive the setu fee at 200+ if we are mailing for you</p>
          <p>
            Order Now: By phone - 404.849.6139- By email- info@mrpostcard.com
          </p>
        </div>
      </FadeIn>
    );
  }
}
