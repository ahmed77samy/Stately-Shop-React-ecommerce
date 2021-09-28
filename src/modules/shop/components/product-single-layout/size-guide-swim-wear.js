import { Col, Row, Table } from "react-bootstrap"

function SizeGuideSwimWear () {
    return(
        <Row className="layout--space">
            <Col xs={12}>
                <div className="tab__header">
                    <span className="text-capitalize">swinWear Size Chart (Inch)</span>
                </div>
                {/*========== Table ==========*/}
                <Table striped bordered responsive hover>
                    <thead>
                        <tr>
                            <th colSpan='5' className="text-center text-uppercase">
                                <h6>swinWear</h6>
                                <span>size in inches</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-uppercase text-center">
                        <tr>
                            <th>size</th>
                            <th>us / can</th>
                            <th>bust</th>
                            <th>waist</th>
                            <th>hips</th>
                        </tr>
                        <tr>
                            <td>xs</td>
                            <td>0</td>
                            <td>31"-32"</td>
                            <td>24"-25"</td>
                            <td>33"-34"</td>
                        </tr>
                        <tr>
                            <td>s</td>
                            <td>2-4</td>
                            <td>33"-34"</td>
                            <td>26"-27"</td>
                            <td>35"-36"</td>
                        </tr>
                        <tr>
                            <td>m</td>
                            <td>6-8</td>
                            <td>35"-36"</td>
                            <td>28"-29"</td>
                            <td>37"-38"</td>
                        </tr>
                        <tr>
                            <td>l</td>
                            <td>10-12</td>
                            <td>37"-39"</td>
                            <td>30"-32"</td>
                            <td>39"-41"</td>
                        </tr>
                        <tr>
                            <td>xl</td>
                            <td>14</td>
                            <td>40"-42"</td>
                            <td>33"-35"</td>
                            <td>42"-44"</td>
                        </tr>
                    </tbody>
                </Table>
                {/*========== Table ==========*/}
            </Col>
            <Col xs={12}>
                <div className="tab__header">
                    <span className="text-capitalize">swinWear Size Chart (cm)</span>
                </div>
                {/*========== Table ==========*/}
                <Table striped bordered responsive hover>
                    <thead>
                        <tr>
                            <th colSpan='5' className="text-center text-uppercase">
                                <h6>swinWear</h6>
                                <span>size in cm</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-uppercase text-center">
                        <tr>
                            <th>size</th>
                            <th>us / can</th>
                            <th>bust</th>
                            <th>waist</th>
                            <th>hips</th>
                        </tr>
                        <tr>
                            <td>xs</td>
                            <td>0</td>
                            <td>78.7-81.2</td>
                            <td>60.9-63.5</td>
                            <td>83.3-86.9</td>
                        </tr>
                        <tr>
                            <td>s</td>
                            <td>2-4</td>
                            <td>83.8-86.3</td>
                            <td>66-68.5</td>
                            <td>88.4-93.9</td>
                        </tr>
                        <tr>
                            <td>m</td>
                            <td>6-8</td>
                            <td>88.9-91.4</td>
                            <td>71.1-73.6</td>
                            <td>93.5-96</td>
                        </tr>
                        <tr>
                            <td>l</td>
                            <td>10-12</td>
                            <td>93.9-99</td>
                            <td>76.2-81.2</td>
                            <td>76.6-104.6</td>
                        </tr>
                        <tr>
                            <td>xl</td>
                            <td>14</td>
                            <td>101.6-106.6</td>
                            <td>83.8-88.9</td>
                            <td>106.2-111.3</td>
                        </tr>
                    </tbody>
                </Table>
                {/*========== Table ==========*/}
            </Col>
        </Row>
    )
}

export default SizeGuideSwimWear