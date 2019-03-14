import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectComplaints from '../selectors/complaints';
import selectComplaintsTotal from '../selectors/complaintsTotal';

export const ComplaintsSummary = ({ complaintsCount, complaintsTotal }) => {
  const complaintsWord = complaintsCount === 1 ? 'complaint' : 'complaints';
  const formattedComplaintsTotal = numeral(complaintsTotal );

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{complaintsCount}</span> {complaintsWord}totalling <span>{formattedComplaintsTotal}</span></h1>

        <div className="page-header__actions">
          <Link className="button" to="/create">Add Complaints</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleComplaints = selectComplaints(state.complaints, state.filters);

  return {
    complaintsCount: visibleComplaints.length,
    complaintsTotal: selectComplaintsTotal(visibleComplaints)
  };
};


export default connect(mapStateToProps)(ComplaintsSummary);