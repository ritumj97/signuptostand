var chart10 = c3.generate({
    bindto: '#chart10',
    data: {
        x: 'User',
        columns: [
            [
                'User',
                '@5050Parliament',
                '@FScott5050',
                '@DollyvanT',
                '@Jobaldwintrott',
                '@TinaBhartwas',
                '@Zebra_carol',
                '@Rach31M',
                '@janewhild',
                '@Baronessjenkin',
                '@CWOwestmidlands',
            ], // User names
            ['Tweets', 1308, 78, 60, 22, 18, 17, 15, 14, 12, 10], // Corresponding number of tweets
        ],
        type: 'bar',
    },
    axis: {
        rotated: true, // This makes the bar chart horizontal
        x: {
            type: 'category', // This is needed when the x-axis is categorical (like user names)
            tick: {
                rotate: -75,
                multiline: false,
            },

            height: 80, // Adjust as needed for label space
        },
        y: {
            label: {
                text: 'Number of Tweets',
                position: 'outer-middle',
            },
        },
    },
    bar: {
        width: {
            ratio: 0.5, // Adjust bar width as needed
        },
    },
})

var chart11 = c3.generate({
    bindto: '#chart11', // Make sure this matches the ID of the container where you want to display the chart
    data: {
        x: 'x',
        columns: [
            ['x', 'Nov 2020', 'Nov 2021', 'Nov 2022', 'Nov 2023'], // X-axis labels (years)
            ['Tweets', 12, 4.2, 5.3, 4], // Y-axis values (tweet rates)
        ],
        type: 'line', // Specifies that we want a line chart
    },
    axis: {
        x: {
            type: 'category', // This is needed for non-numeric x-axis like dates or categories
            tick: {
                rotate: 0,
                multiline: false,
            },
            label: {
                text: 'Period from 2020 to 2023',
                position: 'outer-center',
            },
            height: 60, // Adjust for label space
        },
        y: {
            label: {
                text: 'Number of Tweets',
                position: 'outer-middle',
            },
        },
    },
    legend: {
        show: false, // Set to true if you want to show the legend
    },
    title: {
        text: 'Tweet rate per day in November over the years', // Chart title
    },
})

var chart12 = c3.generate({
    bindto: '#chart12', // Make sure this matches the ID of the container where you want to display the chart
    data: {
        x: 'x',
        xFormat: '%Y-%m', // This is the format of your date (year-month)
        columns: [
            // X-axis data (dates)
            [
                'x',
                '2020-05',
                '2020-06',
                '2020-07',
                '2020-08',
                '2020-09',
                '2020-10',
                '2020-11',
                '2020-12',
                '2021-01',
                '2021-02',
                '2021-03',
                '2021-04',
                '2021-05',
                '2021-06',
                '2021-07',
                '2021-08',
                '2021-09',
                '2021-10',
                '2021-11',
                '2021-12',
                '2022-01',
                '2022-02',
                '2022-03',
                '2022-04',
                '2022-05',
                '2022-06',
                '2022-07',
                '2022-08',
                '2022-09',
                '2022-10',
                '2022-11',
                '2022-12',
                '2023-01',
                '2023-02',
                '2023-03',
                '2023-04',
                '2023-05',
                '2023-06',
                '2023-07',
                '2023-08',
                '2023-09',
                '2023-10',
                '2023-11',
            ],
            // Y-axis data (number of tweets)
            [
                'Tweets',
                9,
                21,
                8,
                5,
                17,
                13,
                358,
                52,
                34,
                74,
                79,
                55,
                89,
                44,
                33,
                23,
                27,
                30,
                126,
                39,
                26,
                44,
                58,
                43,
                56,
                42,
                36,
                34,
                42,
                51,
                159,
                14,
                10,
                13,
                40,
                10,
                29,
                11,
                13,
                10,
                6,
                11,
                119,
            ],
        ],
        type: 'line', // Defines the chart type
    },
    axis: {
        x: {
            type: 'timeseries', // Defines the x-axis to display timeseries data
            tick: {
                format: function (x) {
                    return x.toLocaleString('default', {
                        month: 'short',
                        year: 'numeric',
                    })
                },
                // This will format the date to 'May 2020', 'Jun 2023' etc.
            },
            label: {
                // Add this label block to your x-axis configuration
                text: 'Month and Year',
                position: 'outer-center', // Position the x-axis title in the center
            },
        },
        y: {
            label: {
                text: 'Number of Tweets',
                position: 'outer-middle',
            },
        },
    },
    padding: {
        bottom: 40, // Adjust padding to prevent labels from being cut off
    },
    legend: {
        show: true, // Set to true if you want to display the legend
    },
    title: {
        text: 'Tweet Rate per Month from May 2020 to November 2023', // Chart title
    },
})
