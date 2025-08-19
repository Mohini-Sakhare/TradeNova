import React from 'react'

function Equity() {
  return (
    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>Equity delivery</th>
                                    <th>Equity intraday</th>
                                    <th class="hide-on-mobile">F&amp;O - Futures</th>
                                    <th class="hide-on-mobile">F&amp;O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="charges-heads">Brokerage</td>
                                    <td>Zero Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td class="hide-on-mobile">0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td class="hide-on-mobile">Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr class="grey-back">
                                    <td class="charges-heads">STT/CTT</td>
                                    <td>0.1% on buy &amp; sell</td>
                                    <td>0.025% on the sell side</td>
                                    <td class="hide-on-mobile">0.02% on the sell side</td>
                                    <td class="hide-on-mobile">
                                        <ul class="list-items">
                                            <li>
                                                0.125% of the intrinsic value on options that are bought and exercised
                                            </li>
                                            <li>
                                                0.1% on sell side (on premium)
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="charges-heads">Transaction charges</td>
                                    <td>NSE: 0.00297%<br/>BSE: 0.00375%</td>
                                    <td>NSE: 0.00297%<br/>BSE: 0.00375%</td>
                                    <td class="hide-on-mobile">NSE: 0.00173%<br/>BSE: 0</td>
                                    <td class="hide-on-mobile">NSE: 0.03503% (on premium)<br/>BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr class="grey-back">
                                    <td class="charges-heads">GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td class="hide-on-mobile">18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td class="hide-on-mobile">18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td class="charges-heads">SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td class="hide-on-mobile">₹10 / crore</td>
                                    <td class="hide-on-mobile">₹10 / crore</td>
                                </tr>
                                <tr class="grey-back">
                                    <td class="charges-heads">Stamp charges</td>
                                    <td>0.015% or ₹1500 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                    <td class="hide-on-mobile">0.002% or ₹200 / crore on buy side</td>
                                    <td class="hide-on-mobile">0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
  )
}

export default Equity