import React from 'react';
import ApiService from '../services/ApiService';

class BookAppointment extends React.Component {
    state = {
        patientName: '',
        phoneNumber: '',
        reason: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const payload =
            {
                "status": "INIT",
                "requestorName": this.state.patientName,
                "requestorPhNumber": this.state.phoneNumber,
                "appointmentReason": this.state.reason,
                "notes": "",
                "subjectId": "clinic3"
            };


        ApiService
            .post('/book-appt', payload)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="patientName" className="col-sm-2 col-form-label"> Patient Name</label>
                    <div className="col-sm-10">
                        <input
                            id="patientName"
                            className="form-control"
                            type="text"
                            value={this.state.patientName}
                            onChange={(e) => this.setState({ patientName: e.target.value })}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phoneNumber" className="col-sm-2 col-form-label"> Phone Number</label>
                    <div className="col-sm-10">
                        <input
                            id="phoneNumber"
                            className="form-control"
                            type="text"
                            value={this.state.phoneNumber}
                            onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="reason" className="col-sm-2 col-form-label"> Reason</label>
                    <div className="col-sm-10">
                        <input
                            id="reason"
                            className="form-control"
                            type="text"
                            value={this.state.reason}
                            onChange={(e) => this.setState({ reason: e.target.value })}
                        />
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>Book Appointment</button>

            </form>
        );
    }
}
export default BookAppointment;
