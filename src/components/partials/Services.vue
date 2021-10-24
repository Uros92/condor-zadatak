<template>
    <section class="services">
        <h2 class="text-center">{{ $t('services.title') }}</h2>
        <p class="text-center">{{ $t('services.description') }}</p>

        <div class="d-flex justify-content-around flex-wrap">
            <div class="services-item">
                <i class="fas fa-code"></i>
                <h3>{{ $t('services.mainServices.first.title') }}</h3>
            </div>
            <div class="services-item">
                <i class="fas fa-check-double"></i>
                <h3>{{ $t('services.mainServices.second.title') }}</h3>
            </div>
            <div class="services-item">
                <i class="fas fa-headset"></i>
                <h3>{{ $t('services.mainServices.third.title') }}</h3>
            </div>
        </div>
    </section>
</template>