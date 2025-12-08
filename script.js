const now = new Date()
const format = new Intl.DateTimeFormat(navigator.language).format(now);

function checkAge(dateStr){
	const date = new Date(dateStr)
	const res = now.getFullYear() - date.getFullYear()
	if (res >= 14){
		return true
	}
	return false
}
console.log(checkAge("2001-01-01"));



