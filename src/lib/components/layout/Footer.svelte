<script>
    export let data = {};
</script>

<footer class="FOOTER box">
    <nav class="footerNav">
        <a class="navItem" href="">Blog</a>
        <span class="divider" />
        <a class="navItem" href="">Argumente</a>
        <span class="divider" />
        <a class="navItem" href="">Über uns</a>
        <span class="divider" />
        <a class="navItem" href="">Kontakt</a>
    </nav>

    <div class="details">
        <div>© Interessengemeinschaft «A22 unter den Boden»</div>
        <span class="divider" />
        <a href="mailto:info@ig-a22.ch">info@ig-a22.ch</a>
    </div>
</footer>

<style>
    .FOOTER {
        min-height: var(--footer-height);
        background-color: var(--blue);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        font-weight: 300;
        text-transform: uppercase;
        margin-top: var(--space-l);
        text-align: center;
    }

    .footerNav,
    .details {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .details {
        margin-top: 1rem;
    }

    a {
        text-decoration: underline;
    }

    .divider {
        display: inline-block;
        height: 1em;
        width: 1px;
        background-color: currentColor;
        margin: 0 0.5em -0.2em 0.5em;
    }
</style>
