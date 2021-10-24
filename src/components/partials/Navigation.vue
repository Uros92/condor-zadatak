<template>
    <!-- Image and text -->
    <section class="navigation">
        <nav class="navbar navbar-light bg-light">

            <router-link class="navbar-brand m-auto" :to="{ name: 'homeView'}">
                <img src="../../assets/logo.png" width="260" height="65" class="d-inline-block align-top" alt="">
            </router-link>

            <div class="nav-wrap">
                <ul class="nav">
                    <li class="nav-item">
                        <router-link :to="{name: 'contactView'}" class="nav-link">
                            Kontakt
                        </router-link>
                    </li>
                </ul>

                <form class="form-inline my-2 my-lg-0">

                    <button
                            :class="{'btn btn-outline-success my-2 my-sm-0': true, 'activeButton': getLocale() === 'en'}"
                            @click.prevent="changeLanguageApp('en')"
                    >
                        {{ $t('language.english') }}
                    </button>

                    <button
                            :class="{'btn btn-outline-success my-2 my-sm-0': true, 'activeButton': getLocale() === 'sr'}"
                            @click.prevent="changeLanguageApp('sr')"
                    >
                        {{ $t('language.serbian') }}
                    </button>
                </form>
            </div>

        </nav>
    </section>
</template>

<script>
    import Navigation from './Navigation';
    export default Navigation;
</script>