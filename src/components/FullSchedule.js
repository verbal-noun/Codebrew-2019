import React, {Component} from 'react'
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableRow from "@material-ui/core/es/TableRow/TableRow";

import Tick from "@material-ui/icons/Check"
import Cross from "@material-ui/icons/Cancel"
import TableBody from "@material-ui/core/es/TableBody/TableBody";

function generateData() {
    function inBetweenInclusive(a, b, v) {
        return a <= v && v <= b;
    }

    function getFirst(hr) {
        return inBetweenInclusive(19, 24, hr)
    }

    function getSecond(hr) {
        return inBetweenInclusive(17, 22, hr)
    }

    function getThird(hr) {
        return inBetweenInclusive(8, 24, hr)
    }

    let outlist = []
    for (let i = 1; i <= 24; i++) {
        let newIn = [getFirst(i), getSecond(i), getThird(i)]
        outlist.push(newIn)
    }

    return outlist;
}

const dataTable = generateData();

class FullSchedule extends Component {
    render() {
        return (<Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Time</TableCell>
                            <TableCell align="right">Mon-Fri</TableCell>
                            <TableCell align="right">Sat</TableCell>
                            <TableCell align="right">Sun</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            dataTable.map((item, index) => {

                                return (
                                    <TableRow>

                                        <TableCell align="center">{(index + 1) + "hrs"}</TableCell>
                                        <TableCell align="center">{item[0] ? <Tick/> : "-"}</TableCell>
                                        <TableCell align="center">{item[1] ? <Tick/> : "-"}</TableCell>
                                        <TableCell align="center">{item[2] ? <Tick/> : "-"}</TableCell>
                                    </TableRow>
                                )
                            })
                        }

                        {/*{rows.map(row => (*/}

                        {/*))}*/}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default FullSchedule;