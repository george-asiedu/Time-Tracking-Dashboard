const buttons = document.querySelectorAll('.btn')

let jsonData = []

const receiveData = async () => {
    const response = await fetch('./data.json')
    const fetchedData = await response.json()
    jsonData = fetchedData
}

const clickButtons = btnArray => {
    btnArray.forEach(button => {
        button.addEventListener('click', () => {
            activeButton(button)
            const activeButtonOption = button.dataset.option
            dashboardContent(activeButtonOption)
        })
    })
}

const activeButton = active => {
    buttons.forEach(btn => btn.classList.remove('active'))
    active.classList.add('active')
}

const dashboardContent = async (activeButtonOption) => {

    const workingHours = time => {
        if(time === 'daily') {
            return 'Yesterday'
        } else if(time === 'weekly') {
            return 'Last week'
        } else if (time === 'monthly') {
            return 'Last month'
        }
    }

    jsonData.forEach(activity => {
        const name = activity.title
        const currentTime = activity.timeframes[activeButtonOption]
        const previousTime = workingHours(activeButtonOption)
        
    })
}

clickButtons(buttons)
receiveData()