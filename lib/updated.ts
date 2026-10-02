export async function getUpdatedOn() {
	const res = await fetch("https://api.github.com/repos/John-Ling/johnling.me/commits?per_page=1", {
		headers: { Authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}` },
	});

	if (!res.ok) {
		return "ERROR";
	}

	const response = await res.json();
	const isoDate: Date = new Date(response[0].commit.author.date);
	return isoDate.toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
