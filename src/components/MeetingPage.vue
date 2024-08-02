<template>
    <section data-aos="fade-up">
        <h2 class="text-center mt-6">BOOK A MEETING</h2>
        <div class="mt-8"></div>
        <!-- <iframe id="open-web-calendar"
            style="background:url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat;"
            src="https://open-web-calendar.hosted.quelltext.eu/calendar.html?start_of_week=su&amp;url=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fical%2Fabhishekwani2022%2540gmail.com%2Fpublic%2Fbasic.ics"
            sandbox="allow-scripts allow-same-origin allow-top-navigation" allowTransparency="true" scrolling="no"
            frameborder="0" height="600px" width="100%" aria-hidden="true"></iframe> -->
        <iframe
            style="border: 0" width="100%" height="600" src="" frameborder="0" aria-hidden='true' id="iframe" src_hide="0"></iframe>
    </section>

</template>

<style></style>

<script>
export default {
    mounted() {
        var iframe = document.querySelector('#iframe');
        iframe.setAttribute('src', 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2s2KXy5CE_33brJnAFPsTClJgVjpYYXB61G4QGPYJmdPg5L62v04D8soABIEpxQAU-Futkg97Q?gv=true');
    }
}
</script>
