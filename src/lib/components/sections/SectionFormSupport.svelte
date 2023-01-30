<script>
    import {writable} from "svelte/store";
    import Field from "$lib/components/fragments/Field.svelte";

    const firstname = writable("");
    const lastname = writable("");
    const street = writable("");
    const location = writable("");
    const role = writable("");
    const email = writable("");
    const phone = writable("");

    let doShowError = false;
    let doShowSuccess = false;
    let doAlertMissingFields = false;
    let isSending = false;

    $: canSubmit = $firstname && $lastname && $street && $location && $email;

    $: if (canSubmit) doAlertMissingFields = false;

    async function trySubmit(e) {
        e.preventDefault();

        if (!canSubmit) {
            doAlertMissingFields = true;
            return;
        }

        isSending = true;
        const fd = new FormData();
        fd.append("firstname", $firstname);
        fd.append("lastname", $lastname);
        fd.append("street", $street);
        fd.append("location", $location);
        fd.append("role", $role);
        fd.append("email", $email);
        fd.append("phone", $phone);

        const res = await fetch("/api/mail", {
            method: "POST",
            body: fd
        });

        if (res.ok) {
            doShowSuccess = true;
            $firstname = "";
            $lastname = "";
            $street = "";
            $location = "";
            $role = "";
            $email = "";
            $phone = "";
        } else doShowError = true;

        isSending = false;
    }
</script>

<form class="SECTION-FORM-SUPPORT section" class:canSubmit class:doAlertMissingFields>
    {#if isSending}
        <div class="box overlay isSending">
            <p>Senden...</p>
        </div>
    {/if}

    {#if doShowSuccess}
        <div
            class="box overlay successMessage"
            on:click={() => (doShowSuccess = false)}
            on:keypress={() => (doShowSuccess = false)}
        >
            <p>Danke für Ihre Unterstützung!</p>
            <p>Wir melden uns bei Ihnen.</p>
        </div>
    {:else if doShowError}
        <div class="box overlay errorMessage">
            <p>Etwas ging schief.</p>

            <button class="textLink forTryAgain" on:click={() => (doShowError = false)}
                >Versuchen sie es nochmal</button
            >
            oder
            <a class="textLink" href="mailto:info@ig-a22.ch">schreiben Sie uns.</a>
        </div>
    {/if}

    <div class="box">
        <div class="fields">
            <Field type="text" value={lastname} name="lastname" label="Nachname" />
            <Field type="text" value={firstname} name="firstname" label="Vorname" />
            <Field type="text" value={role} name="role" label="Funktion" />
            <Field type="text" value={street} name="street" label="Strasse, Nr." />
            <Field type="text" value={location} name="location" label="PLZ, Ort" />
            <Field type="email" value={email} name="email" label="E-Mail" />
            <Field type="text" value={phone} name="phone" label="Telefon" />

            <div class="submitBox ">
                <button class="button forSubmit" on:click={trySubmit}>Absenden</button>
                <div class="alertMissingFields">Bitte füllen Sie alle Felder aus.</div>
            </div>
        </div>
    </div>
</form>

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    .SECTION-FORM-SUPPORT {
    }

    .fields {
        display: flex;
        flex-direction: column;
    }

    .fields > :global(* + *) {
        margin-top: var(--space-s);
    }

    .box {
        display: flex;
        flex-direction: column;
        padding: 0;
    }

    h2 {
        line-height: 1;
    }

    .submitBox {
        display: flex;
        align-items: center;
    }

    .button {
        height: var(--button-height);
        padding: 0 var(--button-padding-x);
        background-color: white;
        border: 1px solid currentColor;
        width: max-content;
        margin-right: var(--space-s);
        transition: background-color var(--duration-middle), color var(--duration-middle),
            opacity var(--duration-middle);
    }

    .button.forSubmit {
        opacity: 0.5;
    }

    .canSubmit .button.forSubmit {
        opacity: 1;
    }

    .button.forTryAgain:hover,
    .canSubmit .button.forSubmit:hover {
        background-color: var(--blue);
        color: white;
    }

    .alertMissingFields {
        pointer-events: none;
        opacity: 0;
        color: crimson;
        transition: opacity var(--duration-slow);
    }

    .doAlertMissingFields .alertMissingFields {
        opacity: 1;
    }

    /* OVERLAYS */

    .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        font-size: var(--font-size-l);
        opacity: a;
        transition: opacity var(--duration-slow);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: white;
    }

    .button.forTryAgain {
        text-decoration: underline;
    }

    .isSending {
        z-index: var(--zPos-front);
    }

    @media (--vw-m) {
        .SECTION-FORM-SUPPORT {
            position: relative;
            min-height: auto;
        }
    }
</style>
