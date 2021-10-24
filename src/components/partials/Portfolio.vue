<template>
    <section class="portfolio">
        <h3 class="text-center">{{ $t('portfolio.title') }}</h3>
        <p class="text-center">{{ $t('portfolio.description') }}!</p>

        <div class="jobs-wrapper" v-if="games.length">

            <div class="container-fluid">
                <div class="row">
                    <div
                            class="col-sm-6 col-lg-4 col-xl-3 mb-2"
                            v-for="(game, index) in games"
                            :key="index"
                    >
                        <div class="card">
                            <img class="card-img-top" src="../../assets/images/job.jpg" alt="Image of job">
                            <div class="card-body">
                                <h5 class="card-title">{{ game.title }}</h5>
                                <p class="card-text">{{ game.description }}</p>
                                <a href="#" class="btn btn-primary">Try game</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import Portfolio from './Portfolio';
    export default Portfolio;
</script>