import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableForAll = ({
  HeadOne,
  HeadTwo,
  HeadThree,
  HeadFour,
  HeadFive,
  HeadSix,
  HeadSeven,
  HeadEight,
  BodyOne,
  BodyTwo,
  BodyThree,
  BodyFour,
  BodyFive,
  BodySix,
  BodySeven,
  BodyEight,
}) => {
  return (
    <div className="shadow-lg bg-white border border-gray-400 rounded-md p-6 overflow-x-auto">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead>{HeadOne}</TableHead>
            <TableHead>{HeadTwo}</TableHead>
            <TableHead>{HeadThree}</TableHead>
            <TableHead>{HeadFour}</TableHead>
            <TableHead>{HeadFive}</TableHead>
            <TableHead>{HeadSix}</TableHead>
            <TableHead>{HeadSeven}</TableHead>
            <TableHead>{HeadEight}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          <TableRow>
            <TableCell>{BodyOne}</TableCell>
            <TableCell>{BodyTwo}</TableCell>
            <TableCell>{BodyThree}</TableCell>
            <TableCell>{BodyFour}</TableCell>
            <TableCell>{BodyFive}</TableCell>
            <TableCell>{BodySix}</TableCell>
            <TableCell>{BodySeven}</TableCell>
            <TableCell>{BodyEight}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

TableForAll.propTypes = {
  HeadOne: PropTypes.node,
  HeadTwo: PropTypes.node,
  HeadThree: PropTypes.node,
  HeadFour: PropTypes.node,
  HeadFive: PropTypes.node,
  HeadSix: PropTypes.node,
  HeadSeven: PropTypes.node,
  HeadEight: PropTypes.node,
  BodyOne: PropTypes.node,
  BodyTwo: PropTypes.node,
  BodyThree: PropTypes.node,
  BodyFour: PropTypes.node,
  BodyFive: PropTypes.node,
  BodySix: PropTypes.node,
  BodySeven: PropTypes.node,
  BodyEight: PropTypes.node,
};

export default TableForAll;
