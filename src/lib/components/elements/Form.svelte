<script>
    import {writable} from "svelte/store";
    import Field from "$lib/components/fragments/Field.svelte";
    import CheckboxGroup from "$lib/components/fragments/CheckboxGroup.svelte";

    const firstname = writable("");
    const lastname = writable("");
    const street = writable("");
    const location = writable("");
    const role = writable("");
    const email = writable("");
    const phone = writable("");

    let doShowSuccess = false;
    let doAlertMissingFields = false;

    $: canSubmit = $firstname && $lastname && $street && $location && $email;

    $: if (canSubmit) doAlertMissingFields = false;

    async function trySubmit() {
        if (!canSubmit) {
            doAlertMissingFields = true;
            return;
        }

        const fd = new FormData();
        fd.append("firstname", $firstname);
        fd.append("lastname", $lastname);
        fd.append("street", $street);
        fd.append("location", $location);
        fd.append("role", $role);
        fd.append("email", $email);
        fd.append("phone", $phone);

        // Vorname
        // Name
        // Funktion
        // Strasse, Nr.
        // PLZ, Ort
        // Mailadresse
        // Telefon

        // const res = await fetch("https://hook.eu1.make.com/7ly6gkq3ciircbiu1h5m27aotz79mjld", {
        //   method: "POST",
        //   body: fd
        // });

        const res = await fetch("/api/mail", {
            method: "POST",
            body: fd
        });

        console.log(res);

        // doShowSuccess = true;
    }
</script>

<form class="FORM useBg-gray" class:canSubmit class:doAlertMissingFields class:doShowSuccess>
    <div class="box successMessage useBg-gray" class:doShowSuccess>
        <p>Vielen Dank für Ihr Interesse!</p>
        <div class="space-m" />
        <p>Wir werden uns bald bei Ihnen melden.</p>
        <div class="space-m" />
    </div>

    <div class="box">
        <h2>Melden Sie Ihr Wohnungsinteresse an:</h2>

        <div class="space-s" />

        <div class="fields">
            <Field type="text" value={lastname} name="lastname" label="Nachname" />
            <Field type="text" value={firstname} name="firstname" label="Vorname" />
            <Field type="text" value={role} name="role" label="Funktion" />
            <Field type="text" value={street} name="street" label="Strasse, Nr." />
            <Field type="text" value={location} name="location" label="PLZ, Ort" />
            <Field type="email" value={email} name="email" label="E-Mail" />
            <Field type="text" value={phone} name="phone" label="Telefon" />

            <div class="submitBox ">
                <button class="button submit" on:click={trySubmit}>Absenden</button>
                <div class="alertMissingFields">Bitte füllen Sie alle Felder aus.</div>
            </div>
        </div>
    </div>
</form>

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    .FORM {
        width: 100%;
        position: absolute;
        bottom: 0;
        min-height: 60vh;
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
        opacity: 0.5;
    }

    .canSubmit .button {
        opacity: 1;
    }

    .canSubmit .button:hover {
        background-color: var(--darkBlue);
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

    .successMessage {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        font-family: "HWPano";
        font-size: var(--font-size-l);
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--duration-slow);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .doShowSuccess .successMessage {
        opacity: 1;
    }

    @media (--vw-m) {
        .FORM {
            position: relative;
            min-height: auto;
        }
    }
</style>
