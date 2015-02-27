@foreach ($lists as $list)
  <h2>{{ $list->name }}</h2>
  <p>{{ $list->description }}</p>
@endforeach
