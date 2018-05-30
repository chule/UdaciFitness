import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { reciveEntries, addEntry } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'

class History extends Component {

    componentDidMount() {
        const { dispatch } = this.props

        fetchCalendarResults()
            .then((entries) => dispatch(reciveEntries(entries)))
            .then(({ entries }) => {
                if (!entries[timeToString()]) {
                    dispatch(addEntry({
                        [timeToString()]: getDailyReminderValue()
                    }))
                }
            })
    }

    render() {
        return (
            <View>
                <Text>{JSON.stringify(this.props)}</Text>
            </View>
        )
    }
}

function mapStateToProps(entries) {
    return {
        entries
    }
}

export default connect(mapStateToProps)(History)